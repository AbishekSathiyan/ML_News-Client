import React, { useState } from "react";

export default function NewsForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("media", media);

    // You can now send `formData` to the backend using Axios or fetch.
    console.log("Form submitted");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Post News</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter news title"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            rows="5"
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your news content here..."
            required
          ></textarea>
        </div>

        {/* Media Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Media (Image / Video / GIF)</label>
          <input
            type="file"
            accept="image/*,video/*"
            className="mt-1 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={handleMediaChange}
          />
        </div>

        {/* Preview */}
        {previewUrl && (
          <div className="mt-4">
            {media?.type?.startsWith("video") ? (
              <video controls className="rounded-lg w-full max-h-64 object-cover">
                <source src={previewUrl} type={media.type} />
              </video>
            ) : (
              <img
                src={previewUrl}
                alt="Preview"
                className="rounded-lg w-full max-h-64 object-cover"
              />
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit News
          </button>
        </div>
      </form>
    </div>
  );
}
