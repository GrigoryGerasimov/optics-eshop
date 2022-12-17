import React from "react";
import { Table } from "../../common/table";
import { ProductEditForm } from "./ProductEditForm";
import { columnHeadings } from "./columnHeadings.js";

const AdminPage = () => {
    return (
        <section className="w-full flex flex-row flex-wrap">
            <aside className="w-[20%] text-gray-700 text-opacity-95 pb-[50%] md:pb-[40%] lg:pb-[30%] xl:pb-[20%] 2xl:pb-[10%]">
                <ProductEditForm/>
            </aside>
            <main className="w-[70%]">
                <Table tableHeadings={columnHeadings}/>
            </main>
        </section>
    );
};

export default AdminPage;
