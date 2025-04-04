import React, { useState, useCallback } from "react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ImageUploadLeaf = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleClassify = async () => {
    if (!image) {
      console.error("No image to classify.");
      return;
    }

    // Create a FormData object and append the image file under the key "file"
    const formData = new FormData();
    formData.append("file", image);

    setIsLoading(true);

    try {
      const response = await fetch("http://34.60.21.66:5000/leaf-disease", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to classify image");
      }
      const result = await response.json();

      // Navigate to the results page, passing the predictions and the generated image.
      navigate("/disease", {
        state: {
          prediction: result.prediction,
          imageUrl: URL.createObjectURL(image), // Change `image` to `imageUrl`
        },
      });
    } catch (error) {
      console.error("Error during classification:", error);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/wallpapers/green_leaves_blured.png')" }}
    >
      <div className="max-w-2xl mx-auto p-2 md:p-6 w-5/6 md:w-full bg-white bg-opacity-90 rounded-lg z-10">
        <h1 className="text-lg md:text-3xl font-bold text-center text-purple-700 mb-2 md:mb-6">
          Find Leaf Disease
        </h1>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? "border-purple-500 bg-purple-50" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {preview ? (
            <div className="space-y-4">
              <img
                src={preview}
                alt="Preview"
                className="max-h-96 mx-auto rounded-lg shadow-lg"
              />
              {isLoading ? (
                <div className="flex justify-center">
                  <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <button
                  onClick={handleClassify}
                  className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Find Disease
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <Upload className="h-12 w-12 text-gray-400" />
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-600">
                  Drag and drop your image here, or click to select
                </p>
                <label className="text-sm md:text-base inline-block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors cursor-pointer">
                  Select Image
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploadLeaf;
