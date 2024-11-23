import React, { useState } from 'react';
import { submitFormData } from "../services/api";

const Upload = () => {    
  const [resume, setResume] = useState(null);
  const [jdFile, setJdFile] = useState(null);
  const [jdText, setJdText] = useState('');
  const [jdOption, setJdOption] = useState('text'); // 'file' or 'text'
  const [profileLinks, setProfileLinks] = useState({
    hackerRank: '',
    leetCode: '',
    linkedIn: '',
    github: ''
  });


  const handleProfileLinkChange = (e) => {
    const { name, value } = e.target;
    setProfileLinks({
      ...profileLinks,
      [name]: value
    });
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleJdFileUpload = (e) => {
    setJdFile(e.target.files[0]);
  };

  const handleBoxClick = (inputId) => {
    document.getElementById(inputId).click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    if (jdOption === 'text' && jdText) {
      formData.append('job_description', jdText);
    } else if (jdOption === 'file' && jdFile) {
      formData.append('jdFile', jdFile);
    } else if (jdOption === 'file' && !jdFile) {
      console.error('Please upload a job description file.');
      return;
    } else if (jdOption === 'text' && !jdText) {
      console.error('Please enter job description text.');
      return;
    }

    if (resume) {
      formData.append('resume', resume);
    }

    try {
      console.log(formData.toString());
      const response = await submitFormData(formData);
      console.log('Form submitted successfully:', response);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto p-8 min-h-screen">
        {/* Resume Upload Section */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-orange-200 mb-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            Upload Resume
          </h2>
          <div className="w-full border-b-4 border-orange-300 mb-4"></div>
          <div
            onClick={() => handleBoxClick("resume-upload-input")}
            className="w-full h-40 flex items-center justify-center border-2 border-dashed border-orange-300 rounded-md bg-orange-100 cursor-pointer hover:bg-orange-200 transition"
          >
            {resume ? (
              <p className="text-gray-700">{resume.name}</p>
            ) : (
              <p className="text-gray-500">Click to upload your resume</p>
            )}
          </div>
          <input
            id="resume-upload-input"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="hidden"
          />
        </div>

        {/* Job Description Section */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-orange-200 mb-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            Job Description
          </h2>
          <div className="w-full border-b-4 border-orange-300 mb-4"></div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Choose Input Method
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setJdOption("text")}
                  className={`px-4 py-2 rounded-md ${
                    jdOption === "text"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Text
                </button>
                <button
                  type="button"
                  onClick={() => setJdOption("file")}
                  className={`px-4 py-2 rounded-md ${
                    jdOption === "file"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  File
                </button>
              </div>
            </div>

            {jdOption === "file" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload JD Document
                </label>
                <div
                  onClick={() => handleBoxClick("jd-upload-input")}
                  className="w-full h-40 flex items-center justify-center border-2 border-dashed border-orange-300 rounded-md bg-orange-100 cursor-pointer hover:bg-orange-200 transition"
                >
                  {jdFile ? (
                    <p className="text-gray-700">{jdFile.name}</p>
                  ) : (
                    <p className="text-gray-500">Click to upload a file</p>
                  )}
                </div>
                <input
                  id="jd-upload-input"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleJdFileUpload}
                  className="hidden"
                />
              </div>
            )}

            {jdOption === "text" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Job Description
                </label>
                <textarea
                  value={jdText}
                  onChange={(e) => setJdText(e.target.value)}
                  rows="6"
                  className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Enter job description here..."
                />
              </div>
            )}
          </div>
        </div>

        {/* Profile Links Section */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-orange-200 mb-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            Profile Links
          </h2>
          <div className="w-full border-b-4 border-orange-300 mb-4"></div>
          <form>
            <div className="grid grid-cols-1 justify-center items-center gap-6">
              <div>
                <label className="flex justify-start items-center gap-2 text-md font-semibold text-gray-700 mb-1">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    className="w-8 h-8 object-cover"
                    alt="LeetCode"
                  />
                  LeetCode Link
                </label>
                <input
                  type="url"
                  name="leetCode"
                  value={profileLinks.leetCode}
                  onChange={handleProfileLinkChange}
                  className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="https://leetcode.com/yourprofile"
                />
              </div>
              <div>
                <label className="flex justify-start items-center gap-2 text-md font-semibold text-gray-700 mb-1">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                    className="w-8 h-8 object-cover"
                    alt="LinkedIn"
                  />
                  LinkedIn Link
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  value={profileLinks.linkedIn}
                  onChange={handleProfileLinkChange}
                  className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="https://www.linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="flex justify-start items-center gap-2 text-md font-semibold text-gray-700 mb-1">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/github.png"
                    className="w-8 h-8 object-cover"
                    alt="GitHub"
                  />
                  GitHub Link
                </label>
                <input
                  type="url"
                  name="github"
                  value={profileLinks.github}
                  onChange={handleProfileLinkChange}
                  className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="https://github.com/yourprofile"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Project Information Section */}
        {/* <div className="bg-white p-8 rounded-lg shadow-md border border-orange-200 mb-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            Project Information
          </h2>
          <div className="w-full border-b-4 border-orange-300 mb-4"></div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Projects (Max 4)
              </label>
              <select
                value={projectCount}
                onChange={handleProjectCountChange}
                className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            {projectLinks.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectLinks.map((link, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project {index + 1} GitHub Link
                    </label>
                    <input
                      type="url"
                      value={link}
                      onChange={(e) =>
                        handleProjectLinkChange(index, e.target.value)
                      }
                      className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      placeholder={`https://github.com/yourproject${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div> */}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-3 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
