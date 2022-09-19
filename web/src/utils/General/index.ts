import { toast } from 'react-toastify';

export const copy = (value: string): void => {
  navigator.clipboard.writeText(value);

  toast('Valor copiado com sucesso', {
    position: toast.POSITION.BOTTOM_CENTER,
    type: 'success',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};
