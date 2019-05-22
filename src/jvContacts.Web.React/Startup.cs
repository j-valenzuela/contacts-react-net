using AutoMapper;
using FluentValidation.AspNetCore;
using jvContacts.Application.Contacts.Commands.CreateContact;
using jvContacts.Application.Contacts.Queries.GetContactList;
using jvContacts.Application.Infrastructure;
using jvContacts.Application.Infrastructure.AutoMapper;
using jvContacts.Application.Interfaces;
using jvContacts.Infrastructure;
using jvContacts.Persistence.Context;
using jvContacts.Web.React.Filters;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace jvContacts.Web.React
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // Add AutoMapper
      services.AddAutoMapper(new Assembly[] { typeof(AutoMapperProfile).GetTypeInfo().Assembly });

      // Add framework services.
      services.AddTransient<INotificationService, NotificationService>();

      // Add MediatR
      services.AddMediatR(typeof(GetContactListQueryHandler).GetTypeInfo().Assembly);
      services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestPerformanceBehavior<,>));
      services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));

      // Add DbContext using SQL Server Provider
      services.AddDbContext<IContactDbContext, ContactDbContext>(options =>
          options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

      services.AddMvc(options => options.Filters.Add(typeof(CustomExceptionFilterAttribute)))
              .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
              .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<CreateContactCommandValidator>());

      // Customise default API behavour
      services.Configure<ApiBehaviorOptions>(options =>
      {
        options.SuppressModelStateInvalidFilter = true;
      });

      // In production, the React files will be served from this directory
      services.AddSpaStaticFiles(configuration =>
      {
        configuration.RootPath = "ClientApp/build";
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseStaticFiles();
      app.UseSpaStaticFiles();

      app.UseMvc(routes =>
      {
        routes.MapRoute(
                  name: "default",
                  template: "{controller}/{action=Index}/{id?}");
      });

      app.UseSpa(spa =>
      {
        spa.Options.SourcePath = "ClientApp";

        if (env.IsDevelopment())
        {
          spa.UseReactDevelopmentServer(npmScript: "start");
        }
      });
    }
  }
}
