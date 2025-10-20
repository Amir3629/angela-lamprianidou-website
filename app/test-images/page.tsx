export default function TestImagesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Images</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Back to emotions 1</h2>
          <img src="/back_to_emotions_1.jpg" alt="Test 1" className="w-64 h-48 object-cover" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Back to emotions 2</h2>
          <img src="/back_to_emotions_2.jpg" alt="Test 2" className="w-64 h-48 object-cover" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Back to emotions 3</h2>
          <img src="/back_to_emotions_3.jpg" alt="Test 3" className="w-64 h-48 object-cover" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Back to emotions 4</h2>
          <img src="/back_to_emotions_4.jpg" alt="Test 4" className="w-64 h-48 object-cover" />
        </div>
      </div>
    </div>
  );
}
