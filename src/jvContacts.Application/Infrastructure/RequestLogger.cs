using System.Threading;
using System.Threading.Tasks;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;

namespace jvContacts.Application.Infrastructure
{
  public class RequestLogger<TRequest> : IRequestPreProcessor<TRequest>
  {
    private readonly ILogger _logger;

    public RequestLogger(ILogger<TRequest> logger)
    {
      _logger = logger;
    }

    public Task Process(TRequest request, CancellationToken cancellationToken)
    {
      var name = typeof(TRequest).Name;

      // TODO: Add User Details after adding Authentication to the project

      _logger.LogInformation("jvContacts Request: {Name} {@Request}", name, request);

      return Task.CompletedTask;
    }
  }
}
