import { Subtitle, LoaderCard } from "../ui";
import { CalendarIcon } from "../ui/icons";
import { MealsListItem } from "./MealsListItem";

const nextSevenDays = Array(7)
  .fill()
  .map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date;
  });

const datesAreSameDay = (date1, date2) =>
  date1.getYear() === date2.getYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const MealsList = ({ isLoading, meals, onDelete }) => {
  const subtitle = "Menú Semanal";
  return (
    <div>
      <div className="flex items-center">
        <CalendarIcon />
        <Subtitle subtitle={subtitle} />
      </div>

      {isLoading ? (
        <LoaderCard amount={5} />
      ) : (
        nextSevenDays.map((date, index) => {
          const mealForDay = meals.find((meal) =>
            datesAreSameDay(date, meal.plannedDate)
          );
          return (
            <MealsListItem
              key={index}
              meal={mealForDay}
              date={date}
              onDelete={onDelete}
            />
          );
        })
      )}
    </div>
  );
};
