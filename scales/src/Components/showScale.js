import React, { useEffect } from "react";

const ShowScale = ({ instrument, grade }) => {
    const [scales, setScales] = React.useState("");

    useEffect(() => {
        const fetchScales = async () => {
            const response = await fetch("http://localhost:3000/api/getAll");
            const data = await response.json();
            console.log("data", data);
            setScales(data);
        };
        fetchScales();
    }, []);

    const showScales = () => {
        console.log("instrument", instrument);
        console.log("grade", grade);
        //check that state has been saved
        if (instrument !== "" && grade !== "") {
            console.log("instrument and grade have been selected");
            
            return (
                <div>
                    {scales.map((scale) => {
                        if (scale.Grade === grade ) {
                        console.log("scale.grade:", scale.Grade, "grade:", grade)
                        console.log(scale.Majors.length)
                        //length of majors array
                        let x = Math.floor(Math.random() * scale.Majors.length);
                        console.log(x)
                        return (
                            <div key={scale.id}>
                                <h2>{scale.Majors[x].Key}</h2>
                                <h2>{scale.Majors[x].Range}</h2>

                                <hr />
                            </div>
                        );
                        }
                    })}
                </div>
            );
        }
    };
    showScales();

    console.log("state scales", scales);
    return <div>{showScales()}</div>;
};

export default ShowScale;
