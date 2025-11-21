import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies = [] }) {
return (
<div className="my-6">
<h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
<div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700">
{movies.map((m) => (
<div key={m.id} className="flex-shrink-0 w-[140px] md:w-[160px]">
<MovieCard movie={m} />
</div>
))}
</div>
</div>
);
}