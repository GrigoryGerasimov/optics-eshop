import React from "react";
import { useParams } from "react-router-dom";
import { ProductMainImage } from "./ProductMainImage.jsx";
import { ProductSideImage } from "./ProductSideImage.jsx";
import { ProductInfoBlock } from "./ProductInfoBlock.jsx";

const productData = [
    {
        _id: "0001",
        imgBig: "https://images.unsplash.com/photo-1556306510-31ca015374b0",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 1",
        title: "Brand New Day",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0002",
        imgBig: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 2",
        title: "Super Glasses 2022",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0003",
        imgBig: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 3",
        title: "Collection FW2021",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0004",
        imgBig: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 4",
        title: "Perfect choice!",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0005",
        imgBig: "https://images.unsplash.com/photo-1602703522866-fb486308da5d",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 5",
        title: "Fantastic Tale",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0006",
        imgBig: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 6",
        title: "Women Collection SS22",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0007",
        imgBig: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 7",
        title: "Kids Choice",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0008",
        imgBig: "https://images.unsplash.com/photo-1556306510-31ca015374b0",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 8",
        title: "Brand New Day",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0009",
        imgBig: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 9",
        title: "Super Glasses 2022",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0010",
        imgBig: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 10",
        title: "Collection FW2021",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0011",
        imgBig: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 11",
        title: "Perfect choice!",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0012",
        imgBig: "https://images.unsplash.com/photo-1602703522866-fb486308da5d",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 12",
        title: "Fantastic Tale",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0013",
        imgBig: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 13",
        title: "Women Collection SS22",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0014",
        imgBig: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 14",
        title: "Kids Choice",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    },
    {
        _id: "0015",
        imgBig: "https://images.unsplash.com/photo-1483412468200-72182dbbc544",
        imgSmall: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6", "https://images.unsplash.com/photo-1602703522866-fb486308da5d"],
        name: "glasses img 15",
        title: "Kids Choice",
        brand: "Personal Brand",
        collection: "Men FW22",
        productGroup: "очки коррекционные",
        description: "универсальные медицинские мужские очки для зрения - элегантные, лёгкие, изящные и прочные (ширина линзы 54 мм). Подходят к среднему и крупному мужскому лицу шириной 141-147 мм",
        colors: ["чёрные", "тёмно-коричневые", "светло-серые"],
        shipmentType: "любым удобным для Вас способом",
        license: "Производственная и медицинская сертификация на территории РФ",
        additionalInfo: "В комплекте поставки: оправа, фирменный футляр, салфетка для очистки линз",
        warrantyPeriod: "12",
        countryOfOrigin: "РФ"
    }
];

const ProductPage = () => {
    const { productId } = useParams();

    const currentItem = productData.find(productItem => productItem._id === productId);

    return (
        <div className="w-[inherit] h-full flex flex-row flex-wrap justify-evenly items-center mt-[50px] pb-[10%]">
            <div className="w-6/12">
                <ProductMainImage
                    productMainImgPath={currentItem.imgBig}
                    productMainImgTitle={currentItem.name}
                />
                <div className="flex flex-row flex-wrap mt-1">
                    {currentItem.imgSmall.map(img => (
                        <ProductSideImage
                            key={img.slice(img.lastIndexOf("-") + 1)}
                            productSideImgPath={img}
                            productSideImgTitle={currentItem.name}
                        />
                    ))}
                </div>
            </div>
            <div className="w-3/12">
                <ProductInfoBlock {...currentItem}/>
            </div>
        </div>
    );
};

export default ProductPage;
