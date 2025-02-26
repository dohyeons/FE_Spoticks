import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface ConfirmProps {
  title?: string | undefined;
  content?: string;
  confirmButtonText: string;
  functionDispatch: () => void;
}

const confirmAlert = ({ title, confirmButtonText, functionDispatch }: ConfirmProps) => {
  MySwal.fire({
    title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#8d8d8d",
    cancelButtonColor: "#dd4255",
    confirmButtonText,
    cancelButtonText: "취소",
  }).then((result: { isConfirmed: boolean }) => {
    if (result.isConfirmed) {
      functionDispatch();
    }
  });
};
export default confirmAlert;
