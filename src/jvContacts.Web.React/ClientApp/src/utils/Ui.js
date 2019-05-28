import { toast } from 'react-toastify';

const opts = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export class Ui {
  static showErrors(...messages) {

    messages.forEach(x => {
      if (!Array.isArray(x)) {
        toast.error(x, opts);
      }
      else {
        x.forEach(y => toast.error(y, opts));
      }
    });
  }

  static showSuccess(message) {
    toast.success(message, opts);
  }

  static showInfo(message) {
    toast.info(message, opts);
  }
}