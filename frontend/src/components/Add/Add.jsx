import styles from "./Add.module.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.promise(
      fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      {
        loading: "Saving...",
        success: <b>Playlist saved!</b>,
        error: <b>Could not save.</b>,
      }
    );
  };

  console.log(errors);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Add your playlist</h2>
        <select
          className={styles.select}
          {...register("sentiment", { required: true })}
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="neutral">Neutral</option>
          <option value="angry">Angry</option>
          <option value="surprise">Surprise</option>
        </select>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Spotify playlist id"
          {...register("url", { required: true })}
        />

        <input className={styles.submit} type="submit" />
      </form>
      <Toaster />
    </>
  );
};

export default Add;
