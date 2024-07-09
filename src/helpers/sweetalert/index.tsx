import Swal, { SweetAlertResult } from "sweetalert2";

export const ShowQuestion = (
  title: string,
  fnConfirm: () => void,
  fnCancel?: () => void
) => {
  Swal.fire({
    title,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    icon: "question",
    iconColor: "#004040"
  }).then((result: SweetAlertResult) => {
    if (result.isConfirmed) fnConfirm();
    else {
      fnCancel && fnCancel();
      Swal.close();
    }
  });
};
