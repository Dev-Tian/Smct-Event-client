interface LoadingTypes {
  classname?: string;
}
export default function Loading({ classname }: LoadingTypes) {
  return (
    <div
      className={`${classname} fixed z-50 flex items-center justify-center bg-black/40`}
    >
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndmZWpyNnY4amhlaTV4emJ4amgzeDFzeWlzODZyYW9sbTBxYzAyayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ILH06psjG3v8O00D16/giphy.gif"
        alt="Loading..."
        className="w-20 h-20"
      />
    </div>
  );
}
