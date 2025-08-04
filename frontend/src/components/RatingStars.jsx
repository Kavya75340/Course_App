import { Star, StarHalf, Star as EmptyStar } from "lucide-react";

export default function RatingStars({ rating }) {
    const totalStars = 5;
    const fullStars = Math.floor(rating); // full stars
    const hasHalfStar = rating % 1 >= 0.25; // half star condition
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="d-flex">
            {/* Full stars */}
            {[...Array(fullStars)].map((_, i) => (
                <Star
                    key={`full-${i}`}
                    size={20}
                    className="text-warning"
                    fill="currentColor"
                />
            ))}
            {/* Half star */}
            {hasHalfStar && (
                <StarHalf
                    key="half"
                    size={20}
                    className="text-warning"
                    fill="currentColor"
                />
            )}
        </div>
    );
}
