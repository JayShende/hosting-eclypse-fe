import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../utils";
const ShippingPage = () => {
  const [f_name, setf_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [street_address, setstreet_address] = useState("");
  const [apt_num, setapt_num] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");

  useEffect(() => {
    const uidStored = localStorage.getItem("uid");
    console.log(uidStored);
    if (uidStored == null) return;
    async function fetchData() {
      try {
        const response = await axios({
          method: "post",
          url: `${BACKEND_URL}getUserAddress`,
          data: {
            uid:uidStored
          },
        });
        if (response == null) {
          alert("Something Wrong with the uid");
        }

        setf_name(response.data.f_name);
        setl_name(response.data.l_name);
        setstreet_address(response.data.street_address);
        setapt_num(response.data.apt_num);
        setstate(response.data.state);
        setzip(response.data.setzip);
      } catch {
        console.log("Something wrong");
      }
    }
    fetchData();
  }, []);
  async function makePayment() {
    const uidStored = localStorage.getItem("uid");
    if (uidStored != null) {
      return;
    }
    const data = {
      f_name: f_name,
      l_name: l_name,
      street_address: street_address,
      apt_num: apt_num,
      state: state,
      zip: zip,
    };

    try {
      const response = await axios({
        method: "post",
        url: `${BACKEND_URL}addPaymentsInfo`,
        data: data,
      });
      const uid = response.data.uid;
      localStorage.setItem("uid", uid);
    } catch {
      alert("Some error");
    }
  }

  return (
    <div className=" mt-[122px] sm:mx-[55px] mx-0 ">
      <div className="flex gap-x-[35px] sm:mx-0 mx-5 items-center">
        <Link to="/">
          <FaChevronLeft className="text-2xl" />
        </Link>
        <span className="sm:text-2xl text-xl font-Poppins">
          Shipping Address{" "}
        </span>
      </div>
      <div className="grid sm:grid-cols-2 grid-rows-2 gap-[26px] mt-[34px] mx-2">
        <div className=" sm:p-[45px] p-4   border-2 rounded-lg border-stone-300">
          <div className="flex gap-x-[20px] items-center">
            <FaRegDotCircle className="text-2xl text-red-500" />
            <span className="sm:text-2xl text-xl font-Poppins">
              Add New Address
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-[35px]">
            <div className="mt-[31px]">
              <span className="sm:text-lg text-sm font-Poppins">
                First Name
              </span>
              <input
                type="text"
                className="w-full sm:h-[67px] h-[60px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
                onChange={(e) => {
                  setf_name(e.target.value);
                }}
                value={f_name}
              />
            </div>
            <div className="mt-[31px]">
              <span className="sm:text-lg text-sm font-Poppins">Last Name</span>
              <input
                type="text"
                className="w-full sm:h-[67px] h-[60px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
                onChange={(e) => {
                  setl_name(e.target.value);
                }}
                value={l_name}
              />
            </div>
          </div>

          <div className="flex flex-col mt-[26px]">
            <span className="sm:text-lg text-sm font-Poppins">
              Street Address
            </span>
            <input
              type="text"
              className="w-auto h-[67px] border-2 rounded-lg border-stone-300 px-2 mt-[9px]"
              onChange={(e) => {
                setstreet_address(e.target.value);
              }}
              value={street_address}
            />
          </div>

          <div className="grid grid-cols-3 gap-x-[15px] mt-[26px]">
            <div className="">
              <span className="sm:text-lg text-sm font-Poppins">
                Apt Number
              </span>
              <input
                type="text"
                className="w-full sm:h-[67px] h-[60px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
                onChange={(e) => {
                  setapt_num(e.target.value);
                }}
                value={apt_num}
              />
            </div>
            <div className="">
              <span className="sm:text-lg text-sm font-Poppins">State</span>
              <input
                type="text"
                className="w-full sm:h-[67px] h-[60px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
                onChange={(e) => {
                  setstate(e.target.value);
                }}
                value={state}
              />
            </div>
            <div className="">
              <span className="sm:text-lg text-sm font-Poppins">Zip</span>
              <input
                type="text"
                className="w-full sm:h-[67px] h-[60px] border-2 border-stone-300 rounded-lg px-2 mt-[9px]"
                onChange={(e) => {
                  setzip(e.target.value);
                }}
                value={zip}
              />
            </div>
          </div>

          <div className="sm:mt-[26px] mt-20 grid grid-cols-[30%_1fr] gap-x-[28px]">
            <div className=" sm:h-[67px] h-[60px] border-2 border-stone-300 rounded-lg flex justify-center items-center font-Poppins sm:text-xl text-lg">
              cancel
            </div>
            <div
              className=" sm:h-[67px] h-[60px] border-2 border-stone-300 bg-black text-white rounded-lg flex justify-center items-center sm:text-xl text-lg cursor-pointer hover:bg-red-500 transition duration-200"
              onClick={makePayment}
            >
              Save This Address
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg border-stone-300 bg-zinc-100 sm:px-[40px] px-4 pt-[26px] flex flex-col">
          <span className="text-zinc-600 sm:text-lg text-sm font-Poppins">
            By placing your order, you agree to our company
            <span className="text-black"> Privacy policy</span> and
            <span className="text-black"> Conditions of use</span> .
          </span>

          <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-zinc-400 my-[26px]"></div>
          <div className="sm:text-2xl text-xl font-Poppins  ">
            Order Summary
          </div>
          <div className="flex flex-col text-zinc-600  sm:text-lg text-sm mt-[45px] font-Poppins gap-y-[18px]">
            <div className="flex justify-between">
              <span> Items - Silhouette No. 1 – Vermilion</span>
              <span>7,999</span>
            </div>
            <div className="flex justify-between">
              <span> Shipping and handling:</span>
              <span>200</span>
            </div>
            <div className="flex justify-between">
              <span> Before tax:</span>
              <span>6,599</span>
            </div>
            <div className="flex justify-between">
              <span> Tax Collected:</span>
              <span>1,400</span>
            </div>
          </div>

          <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-zinc-400 my-[42px]"></div>
          <div className="flex justify-between sm:text-2xl text-xl font-Poppins">
            <span>Order Total</span>
            <span>8,199</span>
          </div>
          <div className="flex justify-center items-center">
            <div
              className=" sm:w-96 w-80 h-[67px] border-2 border-stone-300 bg-black text-white rounded-lg flex justify-center items-center text-xl cursor-pointer hover:bg-red-500 transition duration-200 mt-8"
              onClick={makePayment}
            >
              Place Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
