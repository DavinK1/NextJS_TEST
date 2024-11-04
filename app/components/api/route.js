// <------------------------------------------ Products ------------------------------------------>

// สำหรับเรียกข้อมูล Product ทั้งหมด
export async function GetProducts() {
    const res = await fetch('http://localhost:4000/api-products/products/')

    if (!res.ok) {
        throw new Error('Cannot fetch Products')
    }

    return res.json()
}


// <------------------------------------------ Users ------------------------------------------>

// สำหรับเรียกข้อมูล User ทั้งหมด
export async function GetUsers() {
    const res = await fetch('http://localhost:4000/api-users/users/')

    if (!res.ok) {
        throw new Error('Cannot fetch Users')
    }

    return res.json()
}

// สำหรับลบข้อมูล User ตาม ID
export async function deleteUser(userId) {
    const res = await fetch(`http://localhost:4000/api-users/users/${userId}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error('Cannot delete user');
    }

    return res.json();
}