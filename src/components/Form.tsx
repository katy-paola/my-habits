import { useState } from "react";
import Habit from "./Habit";
interface Habit {
  id: number;
  title: string;
}

export default function Form() {
  const [habit, setHabit] = useState<string>("");
  const [habits, setHabits] = useState([] as Habit[]);
const [placeholder, setPlaceholder] = useState<string>("Drink water");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHabit(e.target.value);
    setPlaceholder(habit);
  };

  const createHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!habit) {
      alert("Please enter a habit");
      return;
    }
    const newHabit = {
      id: habits.length + 1,
      title: habit,
    };
    const totalHabits = [newHabit, ...habits];
    setHabits(totalHabits);
    setHabit("");
  };

  return (
    <section className="flex flex-col gap-8">
      <form className="flex flex-col gap-4" onSubmit={createHabit}>
        <label>Create new habit</label>
        <section className="flex gap-2">
          <input
            type="text"
            placeholder={placeholder}
            className="flex-1 px-4 py-2 w-full text-sm text-neutral-800 border-solid border-2 outline-none border-transparent focus:border-purple-500 placeholder:w-full"
            value={habit}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-purple-500 px-4 py-2 text-base">
            Create
          </button>
        </section>
      </form>
      <ul className="flex flex-col gap-4">
        {habits.length > 0 &&
          habits.map((habit, _) => (
            <li key={habit.id} className="bg-purple-200 text-neutral-800 rounded-lg overflow-hidden">
              <Habit title={habit.title} />
            </li>
          ))}
      </ul>
    </section>
  );
}
