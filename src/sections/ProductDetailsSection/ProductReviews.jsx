// /* =========================================
//    ProductReviews.jsx
// ========================================= */

// function ProductReviews({ product }) {
//   return (
//     <div className="mt-10 border-t pt-6">
//       <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>

//       {/* SUMMARY */}
//       <div className="flex items-center gap-6 mb-6">
//         <div className="text-4xl font-bold">{product.ratings.average}</div>

//         <div className="text-gray-500">
//           Based on {product.ratings.reviews} reviews
//         </div>
//       </div>

//       {/* MOCK REVIEWS (later API) */}
//       <div className="space-y-4">
//         {[1, 2, 3].map((item) => (
//           <div key={item} className="p-4 border rounded-lg bg-gray-50">
//             <div className="flex justify-between">
//               <span className="font-medium">User {item}</span>
//               <span className="text-yellow-500">★★★★☆</span>
//             </div>

//             <p className="text-sm text-gray-600 mt-2">
//               Great product, very smooth experience!
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductReviews;
