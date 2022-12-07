import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../common/card/Card.jsx";

const productData = [
    {
        _id: "0001",
        img: "https://images.unsplash.com/photo-1556306510-31ca015374b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 1",
        title: "Brand New Day",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0002",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 2",
        title: "Super Glasses 2022",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0003",
        img: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 3",
        title: "Collection FW2021",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0004",
        img: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 4",
        title: "Perfect choice!",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0005",
        img: "https://images.unsplash.com/photo-1602703522866-fb486308da5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 5",
        title: "Fantastic Tale",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0006",
        img: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 6",
        title: "Women Collection SS22",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0007",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 7",
        title: "Kids Choice",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0008",
        img: "https://images.unsplash.com/photo-1556306510-31ca015374b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 8",
        title: "Brand New Day",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0009",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 9",
        title: "Super Glasses 2022",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0010",
        img: "https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 10",
        title: "Collection FW2021",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0011",
        img: "https://images.unsplash.com/photo-1591643529995-aef2e1e6f281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 11",
        title: "Perfect choice!",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0012",
        img: "https://images.unsplash.com/photo-1602703522866-fb486308da5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 12",
        title: "Fantastic Tale",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0013",
        img: "https://images.unsplash.com/photo-1603578119639-798b8413d8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 13",
        title: "Women Collection SS22",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0014",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 14",
        title: "Kids Choice",
        description: "Стильные мужские очки на каждый день"
    },
    {
        _id: "0015",
        img: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=250",
        name: "glasses img 15",
        title: "Kids Choice",
        description: "Стильные мужские очки на каждый день"
    }
];

const ProductCards = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-x-3 gap-y-8">
            {productData.map(dataItem => {
                return <Card key={dataItem._id} {...dataItem} onClick={() => navigate(dataItem._id)}/>;
            })}
        </div>

    );
};

export default ProductCards;
