"use client"; // กำหนดให้เป็น Client Component

import Link from "next/link";
import { useEffect, useState } from "react";
import { GetUsers } from "@/app/components/api/route";
import Swal from "sweetalert2";
import { deleteUser } from "@/app/components/api/route";

export default function Page() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const userData = await GetUsers();
            setUsers(userData);
        }
        fetchUsers();
    }, []);

    async function handleDelete(userId) {
        const result = await Swal.fire({
            title: 'คุณแน่ใจหรือไม่?',
            text: "คุณต้องการลบผู้ใช้รายนี้!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'ใช่, ลบเลย!',
            cancelButtonText: 'ยกเลิก'
        });

        if (result.isConfirmed) {
            try {
                await deleteUser(userId);
                setUsers(users.filter(user => user.id !== userId));
                Swal.fire('ลบสำเร็จ!', 'ผู้ใช้ได้ถูกลบแล้ว.', 'success');
            } catch (error) {
                console.error(error);
                Swal.fire('เกิดข้อผิดพลาด!', 'ไม่สามารถลบผู้ใช้ได้.', 'error');
            }
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950">
            <div className="flex items-center justify-center min-h-[600px] flex-col">
                <div className="w-full flex justify-end mb-4">
                    <Link
                        className="middle none center flex items-center justify-center rounded-lg bg-green-500 p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        href="/pages/api/user/insertUser/">Add User
                    </Link>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-xl">
                    <table className="w-full text-sm text-left text-black">
                        <thead className="text-md font-bold text-white uppercase bg-blue-600">
                            <tr>
                                <th scope="col" className="py-3 px-6">id</th>
                                <th scope="col" className="py-3 px-6">firstname</th>
                                <th scope="col" className="py-3 px-6">lastname</th>
                                <th scope="col" className="py-3 px-6">username</th>
                                <th scope="col" className="py-3 px-6">password</th>
                                <th scope="col" className="py-3 px-6">email</th>
                                <th scope="col" className="py-3 px-6">role</th>
                                <th scope="col" className="py-3 px-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="bg-white border-b">
                                    <td className="py-4 px-6">{user.id}</td>
                                    <td className="py-4 px-6">{user.firstname}</td>
                                    <td className="py-4 px-6">{user.lastname}</td>
                                    <td className="py-4 px-6">{user.username}</td>
                                    <td className="py-4 px-6">{user.password}</td>
                                    <td className="py-4 px-6">{user.email}</td>
                                    <td className="py-4 px-6">{user.role}</td>
                                    <td className="py-4 text-center">
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <Link
                                                    className="middle none center flex items-center justify-center rounded-lg bg-yellow-500 p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                    href={`/pages/api/user/editUser/${user.id}`}
                                                >
                                                    แก้ไข
                                                </Link>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handleDelete(user.id)}
                                                    className="middle none center flex items-center justify-center rounded-lg bg-red-500 p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                    type="button"
                                                >
                                                    ลบ
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
