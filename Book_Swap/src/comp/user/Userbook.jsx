import React, { useState, useEffect } from "react";
import axios from "axios";

function Userbook() {
    const [dataId, setData] = useState(null);
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("data");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setData(parsedData);
            getData(parsedData);
        }
    }, []);

    const getData = async (userData) => {
        if (!userData || !userData._id) return;

        const payload = {
            userId: userData._id,
        };

        try {
            const response = await axios.post(
                "http://localhost:8000/api/user-bookpost",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.code === 200) {
                console.log("API Response:", response.data.data); // Debugging log
                setBookData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching book data:", error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {bookData.map((item, index) => (
                        <div
                            className="col-12 col-md-6 col-lg-4 user_list my-2 mx-2"
                            key={index}
                        >
                            <div className="card p-2 h-100">
                                <div className="text-center">
                                    <img
                                        className="user_img img-fluid rounded-circle"
                                        src={`http://localhost:8000/upload/${item.img || "default.jpg"}`}
                                        alt={`${item.name || "Unknown"}'s avatar`}
                                        style={{
                                            maxWidth: "100px",
                                            height: "100px",
                                        }}
                                    />
                                </div>
                                {/* <div className="user_name text-center mt-2 font-weight-bold">
                                    {item.name || "Unknown"}
                                </div> */}
                                <table className="table table-borderless mt-3">
                                    <tbody>
                                        <tr>
                                            <td className="text-right font-weight-bold">
                                                Book Name:
                                            </td>
                                            <td className="text-left">
                                                {item.Book_Name || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">
                                                Author Name:
                                            </td>
                                            <td className="text-left">
                                                {item.Author_Name || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">
                                                Genres:
                                            </td>
                                            <td className="text-left">
                                                {item.Genres || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">
                                                Amount:
                                            </td>
                                            <td className="text-left">
                                                {item.Amount || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">
                                                Contact:
                                            </td>
                                            <td className="text-left">
                                                {item.contact || "N/A"}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Userbook;
