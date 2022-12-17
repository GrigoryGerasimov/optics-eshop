import React from "react";
import { Table } from "../../common/table";
const AdminPage = () => {
    return (
        <section className="w-full flex flex-row flex-wrap">
            <aside className="w-[15%] text-gray-700 text-opacity-95 p-[2%] pb-[50%] md:pb-[40%] lg:pb-[30%] xl:pb-[20%] 2xl:pb-[10%]"></aside>
            <main className="w-[70%]">
                <Table/>
            </main>
        </section>
    );
};

export default AdminPage;
