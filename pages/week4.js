const datas = [
    { //1
        id: 1,
        firstName: "Azzaya",
        lastname: "An",
        job: "student",
        alive: true,
        height: 100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwryXPiTr1-9rOdIOo-t2wRDfsrrOpNDXiNg&s",
        items: [
            {
                id: 1,
                name: "board",
            },
            {
                id: 1,
                name: "ohiorizz",
            }
        ]
        
    },

    { //2
        id: 2,
        firstName: "John",
        lastname: "Pork",
        job: "engineer",
        alive: false,
        height: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqU7o7zB0103Co0tsy0fuJh77N7bBiDo_CA&s",
        items: [
            {
                id: 2,
                name: "code",
            },
            {
                id: 2,
                name: "skibidi",
            }
        ]
    },

    { //3
        id: 1,
        firstName: "Kayne",
        lastname: "East",
        job: "developer",
        alive: false,
        height: 171,
        image: "https://preview.redd.it/kanye-east-v0-zukoz4j80nsd1.jpeg?width=640&crop=smart&auto=webp&s=982af38e7ce15ad2a0239da4f7eed6c69c3441e1",
        items: [
            {
                id: 3,
                name: "flute",
            },
            {
                id: 3,
                name: "johnny walker",
            }
        ]
    },

    { //4
        id: 1,
        firstName: "No more",
        lastname: "Parties",
        job: "Freelancer",
        alive: true,
        height: 146,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJaRODuA-3d3pSgvXfBup_2Veey4TtMWcBlsU_ltqgN_bM_1rFoqCMLrUwZd5mA-FjwQ&usqp=CAU",
        items: [
            {
                id: 4,
                name: "bottle",
            },
            {
                id: 4,
                name: "ho",
            }
        ]
    },

    { //5
        id: 1,
        firstName: "Chopped",
        lastname: "Chin",
        job: "Teacher",
        alive: true,
        height: 160,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhN4OOOUSon1QiCkdm_MRqMjWOAYQ9otOQQ&s",
        items: [
            {
                id: 5,
                name: "napkin",
            },
            {
                id: 5,
                name: "toilet",
            }
        ]
    },

    { //6
        id: 1,
        firstName: "Eye Of",
        lastname: "Rah",
        job: "Athlete",
        alive: true,
        height: 167,
        image: "https://pbs.twimg.com/media/GghBPqMWoAAFqoD.jpg",
        items: [
            {
                id: 6,
                name: "phone",
            },
            {
                id: 6,
                name: "computer",
            }
        ]
    },

    { //7
        id: 1,
        firstName: "XXX",
        lastname: "Father",
        job: "Businessman",
        alive: true,
        height: 187,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Xxxtentacion_%28cropped%29.jpg/640px-Xxxtentacion_%28cropped%29.jpg",
        items: [
            {
                id: 7,
                name: "element",
            },
            {
                id: 7,
                name: "items",
            }
        ]
    },

    { //8
        id: 1,
        firstName: "John",
        lastname: "Doe",
        job: "Milkman",
        alive: true,
        height: 190,
        image: "https://tr.rbxcdn.com/180DAY-4d8c678185e70957c8f9b5ca267cd335/420/420/Image/Png/noFilter",
        items: [
            {
                id: 8,
                name: "map",
            },
            {
                id: 8,
                name: "id",
            }
        ]
    },

    { //9
        id: 1,
        firstName: "Trajic",
        lastname: "Scott",
        job: "Chef",
        alive: false,
        height: 154,
        image: "https://i1.sndcdn.com/avatars-OdNJen3OJx9TiG11-lvgm1Q-t240x240.jpg",
        items: [
            {
                id: 9,
                name: "dysti",
            },
            {
                id: 9,
                name: "impossib3500le",
            }
        ]
    },

    { //10
        id: 1,
        firstName: "Discord",
        lastname: "Mod",
        job: "Fein",
        alive: true,
        height: 200,
        image: "https://m.media-amazon.com/images/I/51LVazo3XCL._UXNaN_FMjpg_QL85_.jpg",
        items: [
            {
                id: 10,
                name: "sainHar",
            },
            {
                id: 10,
                name: "Gridsh",
            }
        ]
    },
]


import Image from "next/image";
import React from 'react';
import { useRouter } from 'next/router';

export default function InfoCards() {
    const router = useRouter();
    
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
            <div className="w-full flex justify-start mb-6">
                <button  className="p-3 shadow-lg shadow-indigo-500/40 text-purple-800" onClick={() => router.push("/week4_2")} >Row</button>
            </div>

            <div className="grid  xl:grid-cols-4 gap-6 w-full">
                {datas.map((person, index) => (
                    <div key={index} className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center">
                        <img 
                            src={person.image} 
                            alt={`${person.firstName} ${person.lastname}`} 
                            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-3"
                        />
                        <h2 className="text-lg font-semibold text-gray-800">
                            {person.firstName} {person.lastname}
                        </h2>
                        <p className="text-gray-600">{person.job}</p>
                        <p className="text-gray-400 text-sm">Height: {person.height}</p>
                        <p className="text-green-500 text-sm">
                            {person.alive ? "Alive" : "Dead"}
                        </p>

                        {person.items && person.items.length > 0 && (
                            <div className="text-gray-500 text-sm mt-2">
                                <h3 className="font-semibold">Items:</h3>
                                <div>
                                    {person.items.map((item, itemIndex) => (
                                        <div key={itemIndex}>
                                            ID: {item.id}, Name: {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
