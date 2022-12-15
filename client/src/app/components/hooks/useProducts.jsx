import React, { useState, useContext, useMemo, useCallback } from "react";
import { useCategories } from "./useCategories.jsx";
import PropTypes from "prop-types";

const initialProductData = [
    {
        _id: "0001",
        img: "https://images.unsplash.com/photo-1556306510-31ca015374b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1556306510-31ca015374b0",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 1",
        title: "Brand New Day",
        brand: "Personal Brand",
        params: ["#ss23mdeluxe", "#dprogres", "#round", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 8700
    },
    {
        _id: "0002",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 2",
        title: "Super Glasses 2022",
        brand: "Personal Brand",
        params: ["#fw23mdeluxe", "#dfmen", "#thick", "#monthly"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 9990
    },
    {
        _id: "0003",
        img: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 3",
        title: "Collection FW2021",
        brand: "Personal Brand",
        params: ["#fw23mdeluxe", "#dmen", "#square", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 7200
    },
    {
        _id: "0004",
        img: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 4",
        title: "Perfect choice!",
        brand: "Personal Brand",
        params: ["#fw23mdeluxe", "#dcomp", "#thin", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 6900
    },
    {
        _id: "0005",
        img: "https://images.unsplash.com/photo-1602703522866-fb486308da5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1602703522866-fb486308da5d",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 5",
        title: "Fantastic Tale",
        brand: "Personal Brand",
        params: ["#fw23unisex", "#dfsun", "#thin", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 10500
    },
    {
        _id: "0006",
        img: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 6",
        title: "Women Collection SS22",
        brand: "Personal Brand",
        params: ["#fw22wdeluxe", "#dwomen", "#thin", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 9200
    },
    {
        _id: "0007",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 7",
        title: "Kids Choice",
        brand: "Personal Brand",
        params: ["#ss23kidsteens", "#dfkids", "#thick", "#monthly"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 11600
    },
    {
        _id: "0008",
        img: "https://images.unsplash.com/photo-1556306510-31ca015374b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1556306510-31ca015374b0",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 8",
        title: "Brand New Day",
        brand: "Personal Brand",
        params: ["#ss22wdeluxe", "#ddriver", "#thin", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 15100
    },
    {
        _id: "0009",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 9",
        title: "Super Glasses 2022",
        brand: "Personal Brand",
        params: ["#fw22mdeluxe", "#dfflat", "#classic", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 12700
    },
    {
        _id: "0010",
        img: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 10",
        title: "Collection SS2023",
        brand: "Personal Brand",
        params: ["#ss23kidsteens", "#dmen", "#thin", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 10400
    },
    {
        _id: "0011",
        img: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 11",
        title: "Perfect choice!",
        brand: "Personal Brand",
        params: ["#fw23unisex", "#dfstyle", "#round", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 9000
    },
    {
        _id: "0012",
        img: "https://images.unsplash.com/photo-1602703522866-fb486308da5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1602703522866-fb486308da5d",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 12",
        title: "Fantastic Tale",
        brand: "Personal Brand",
        params: ["#fw22mdeluxe", "#dphotochr", "#square", "#monthly"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 13500
    },
    {
        _id: "0013",
        img: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 13",
        title: "Women Collection SS22",
        brand: "Personal Brand",
        params: ["#ss22wdeluxe", "#dwomen", "#semi", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 14900
    },
    {
        _id: "0014",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 14",
        title: "Kids Choice",
        brand: "Personal Brand",
        params: ["#ss23kidsteens", "#dkids", "#thick", "#daily"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 8100
    },
    {
        _id: "0015",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        imgBig: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 15",
        title: "Kids Choice",
        brand: "Personal Brand",
        params: ["#fw22kidsteens", "#dfkids", "#thin", "#everyday"],
        collectionTitle: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ",
        price: 7990
    }
];

const ProductsContext = React.createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProductData);
    const { collection, glassTypes, frameTypes, lenseTypes } = useCategories();

    const filterSearchedProducts = useCallback(data => {
        const searchedProducts = products.filter(productUnit => productUnit.title.toLowerCase().includes(data.toLowerCase()));
        setProducts(searchedProducts);
    }, []);

    const filterCatalogedProducts = useCallback((criteria, category, type, subtype) => {
        const filteredProducts = products.filter(productUnit => {
            switch (criteria) {
                case "collection": {
                    for (const cat of Object.keys(collection[category])) {
                        if (cat === type) {
                            for (const item of collection[category][cat]) {
                                if (productUnit.params.includes(!subtype ? item.id : subtype)) return productUnit;
                            }
                        }
                    }
                    break;
                }
                case "glassTypes": {
                    for (const item of glassTypes[category]) {
                        if (productUnit.params.includes(!type ? item.id : type)) return productUnit;
                    }
                    break;
                }
                case "frameTypes": {
                    for (const item of frameTypes[category]) {
                        if (productUnit.params.includes(!type ? item.id : type)) return productUnit;
                    }
                    break;
                }
                case "lenseTypes": {
                    for (const item of lenseTypes[category]) {
                        if (productUnit.params.includes(!type ? item.id : type)) return productUnit;
                    }
                    break;
                }
                default: return productUnit;
            }
            return false;
        });
        setProducts(filteredProducts);
    }, [collection, glassTypes, frameTypes, lenseTypes]);

    return <ProductsContext.Provider value={useMemo(() => ({
        products,
        filterSearchedProducts,
        filterCatalogedProducts
    }), [
        products,
        filterSearchedProducts,
        filterCatalogedProducts
    ])}>{children}</ProductsContext.Provider>;
};

ProductsProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
