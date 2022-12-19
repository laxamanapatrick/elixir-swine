import Swal from "sweetalert2";

export const BasicToast = (position, icon, title, timer) => {
    return Swal.fire({
        position: position ? position : "top-right",
        icon: icon ? icon : "success",
        title: title ? title : "Progress saved",
        showConfirmButton: false,
        timer: timer ? timer : 1800,
        timerProgressBar: true
    })
}

export const ConfirmationToast = (title, text, icon, confirmColor, cancelColor, confirmButtonText) => {
    return Swal.fire({
        title: title ? title : "Are you sure you want to do this action?",
        text: text ? text : "Click yes to proceed",
        icon: icon ? icon : "question",
        showCancelButton: true,
        confirmButtonColor: confirmColor ? confirmColor : '#3085d6',
        cancelButtonColor: cancelColor ? cancelColor : '#d33',
        confirmButtonText: confirmButtonText ? confirmButtonText : 'Yes'
    })
}
