"use client";
import { SessionInterface } from "@/common.types";
import Image from "next/image";
import FormField from "./FormField";
import { categoryFilters } from "@/constants";
import CustomMenu from "./CustomMenu";
import { useState } from "react";

type ProjectFormProps = {
  type: string;
  session: SessionInterface;
};
const ProjectForm = ({ type, session }: ProjectFormProps) => {
  const [isSubmitting, setIssubmitting] = useState(false);
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    liveSiteurl: "",
    githubUrl: "",
    category: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({ ...prevState, [fieldName]: value }));
  };
  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && "Choose a poster for your project"}
        </label>
        <input
          id="image"
          accept="image/*"
          required={type === "create"}
          type="file"
          onChange={(e) => {
            handleChangeImage;
          }}
          className="form_image-input"
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Project poster"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="Drimbbble"
        setState={(value) => handleStateChange("title", value)}
      />
      <FormField
        title="Description"
        state={form.description}
        placeholder="Showcase and discover remarkable developer projects"
        isTextArea
        setState={(value) => handleStateChange("description", value)}
      />
      <FormField
        type="url"
        title="Website URL"
        state={form.liveSiteurl}
        placeholder="https://drimprofile.netlify.app/"
        setState={(value) => handleStateChange("liveSiteurl", value)}
      />
      <FormField
        type="url"
        title="GitHub URL"
        state={form.githubUrl}
        placeholder="https://github.com/Dclassicgenius/"
        setState={(value) => handleStateChange("githubUrl", value)}
      />

      {/* CustomInput Category */}

      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />

      <div className="flexstart w-full">
        <button>Create</button>
      </div>
    </form>
  );
};

export default ProjectForm;
