/* eslint-disable react/no-unescaped-entities */
"use client";
import Hero from "@/components/hero/Hero";
import enteteImg from "@/public/images/Entetes/contact.png";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Contact() {
  // entete Hero
  const text1 = "Par ce formulaire ?";
  const text2 = "Email ou téléphone ?";
  const text3 = "À vous de choisir !";
  const text4 = "On va y arriver 😉";
  const color = "#111111 ";
  // image de fond
  const bgImg = enteteImg;

  const router = useRouter();
  const [btnBlocked, setBtnBlocked] = useState(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  async function responseMail(data) {
    console.log("data response : ", data);
    try {
      const response = await axios.post("/api/response_mail", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Vous avez reçu un email ! (regardez dans vos spams !)");
        router.push("/");
      } else {
        throw new Error("Erreur lors de l'envoi du message de réponse");
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de l'envoi de réponse");
    } finally {
      setTimeout(() => setBtnBlocked(false), 3000);
    }
  }

  async function onSubmitHandler(data) {
    setBtnBlocked(true);
    // console.log("data : ", data);
    try {
      const response = await axios.post("/api/send_mail", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Votre message a bien été envoyé !");
        responseMail(data);
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de l'envoi");
    }
  }

  return (
    <div>
      <Hero
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        bgImg={bgImg}
        color={color}
      />
      <div className={`container min-h-svh`}>
        <h1 className={`h1 text-clip text-center my-6`}>Formulaire de contact</h1>
        <div className="flex flex-col w-full h-auto mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow rounded-xl customBorder gap-4 bg-gradient-to-tr from-neutral-200 to-neutral-100">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex w-full max-md:flex-col md:gap-x-4">
              {/* prénom */}
              <label
                htmlFor="prenom"
                className="relative block my-3 border border-gray-400 shadow-sm focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600 rounded-xl grow"
              >
                <input
                  type="text"
                  id="prenom"
                  className="w-full p-4 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring placeholder-gray-50 rounded-xl"
                  placeholder="prenom"
                  {...register("prenom", { required: true })}
                />
                <span
                  className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#c07f2a] text-white p-2 rounded-full text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs w-28 text-center`}
                >
                  <b>Prénom</b>
                </span>
              </label>
              {/* nom */}
              <label
                htmlFor="nom"
                className="relative block my-3 border border-gray-400 shadow-sm rounded-xl focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600 grow"
              >
                <input
                  type="text"
                  id="nom"
                  className="w-full p-4 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring placeholder-gray-50 rounded-xl"
                  placeholder="nom"
                  {...register("nom", { required: true })}
                />
                <span
                  className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#c07f2a] text-white p-2 rounded-full text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs w-28 text-center `}
                >
                  <b>Nom</b>
                </span>
              </label>
            </div>

            {/* email */}
            <label
              htmlFor="email"
              className="relative block my-3 border border-gray-400 shadow-sm rounded-xl focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600"
            >
              <input
                type="text"
                id="email"
                className="w-full p-4 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring placeholder-gray-50 rounded-xl"
                placeholder="email"
                {...register("email", { required: true })}
              />
              <span
                className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#c07f2a] text-white p-2 rounded-full text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs w-28 text-center `}
              >
                <b>Email</b>
              </span>
            </label>

            {/* Message */}
            <label
              htmlFor="message"
              className="relative block my-6 border border-gray-400 shadow-sm rounded-xl focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600 "
            >
              <textarea
                id="message"
                className="w-full p-4 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring placeholder-gray-50"
                rows="10"
                placeholder="message"
                {...register("message", { required: true })}
              />
              <span
                className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#c07f2a] text-white p-2 rounded-full text-xs transition-all peer-placeholder-shown:top-[30px] peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs  w-28 text-center  `}
              >
                <b>Message</b>
              </span>
            </label>

            <button
              className={`w-full p-4 mx-auto mt-3 mb-3 duration-200 rounded-full shadow-lg bg-[#c07f2a] text-white hover:opacity-80`}
              disabled={btnBlocked}
            >
              <h4 className={`w-full `}>Envoyer</h4>
            </button>
          </form>
          <p class="text-center">
            <small>
              <i>
                Votre adresse mail ne sera jamais conservée/diffusée mais
                utilisée seulement dans le cadre d'une réponse à l'un de vos
                messages.
              </i>
            </small>
          </p>
        </div>

        <div className="my-8 text-3xl text-center">
          <br />
          Vous pouvez également me contacter par <br /> mail :
          <a href="mailto:contact@christophe-cuisine.fr">
            {" "}
            <u>
              <b>contact@christophe-cuisine.fr</b>
            </u>
          </a>
          <br />
          téléphone au :{" "}
          <a href="tel:0699812296">
            {" "}
            <u>
              <b>06.99.81.22.96</b>
            </u>
          </a>
        </div>
      </div>
    </div>
  );
}
