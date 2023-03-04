import { doc, setDoc } from "firebase/firestore";


export const submitForm = async (email: string, name: string, phone: string) => {
    const nuxtApp = useNuxtApp()
    const db = nuxtApp.$db;

    console.log(db)

    let res = await setDoc(doc(db, "leads", email), {
        name: name,
        email: email,
        phone: phone
    });

    console.log(res)

  };