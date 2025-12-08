import { useEffect } from "react";
import supabase from "./supabaseInit";

function TestConnection() {
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      error ? console.log("Supabase error", error) : console.log(data);
    };
    fetchData();
  }, []);
  return <></>;
}

export default TestConnection;
