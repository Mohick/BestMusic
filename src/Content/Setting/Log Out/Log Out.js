export function logOut() {
    // Xóa cookie Account
    document.cookie = "Account=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    // Chuyển hướng về trang chính
    location.href =  '/';
    
}
