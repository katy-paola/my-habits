// Habit.tsx
export default function Habit({
  title,
  body,
  href,
  updateHabit,
  deleteHabit,
}: {
  title: string;
  body?: string;
  href?: string;
  updateHabit: () => void;
  deleteHabit: () => void;
}) {
  

  return (
    <article
      className={`flex flex-col gap-4 sm:flex-row justify-between sm:items-center p-4 border-t-4 border-t-solid border-t-purple-500 text-base`}
    >
      <h2 className="">{title}</h2>
      {body && <p>{body}</p>}
      {href && <a href={href}>Read more</a>}
      <section className="flex gap-2 text-sm sm:items-center w-full sm:w-auto">
        <button className="bg-purple-400 px-4 py-2 flex-1" onClick={updateHabit}>Edit</button>
        <button className="bg-rose-400 px-4 py-2 flex-1" onClick={deleteHabit}>Delete</button>
      </section>
    </article>
  );
}
