import React, { useEffect, useState } from 'react';
import { getAllStudent } from '../services/api';

const Ranking = () => {
  const [studentsData, setStudentsData] = useState([
    { name: "Sanskar_Gundecha_03", leetcode: 8.5, github: 8, linkedin: 8.5 },
    { name: "Om Gore", leetcode: 7.5, github: 6.5, linkedin: 8.5 },
    // Add more students here
  ]);

  useEffect(()=>{
    getStudents();
  }, [])

  const getStudents = async ()=>{
    setStudentsData(getAllStudent);
  }

  const [sortConfig, setSortConfig] = useState({ key: 'total', ascending: true });

  const calculateTotalScore = (student) => {
    return ((student.leetcode + student.github + student.linkedin) / 3).toFixed(2);
  };

  const sortedData = [...studentsData].sort((a, b) => {
    let aValue, bValue;

    if (sortConfig.key === 'total') {
      aValue = parseFloat(calculateTotalScore(a)); // Convert to number for sorting
      bValue = parseFloat(calculateTotalScore(b));
    } else {
      aValue = a[sortConfig.key];
      bValue = b[sortConfig.key];
    }

    if (aValue < bValue) return sortConfig.ascending ? -1 : 1;
    if (aValue > bValue) return sortConfig.ascending ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      ascending: prev.key === key ? !prev.ascending : true,
    }));
  };

  // Generate rank based on total score
  const rankedData = sortedData.map((student, index) => ({
    ...student,
    rank: index + 1,
  }));

  return (
    <div className="bg-white min-h-screen flex justify-center items-start mt-10">
      <div className="max-w-5xl w-full p-4 sm:p-8 bg-white shadow-md border border-orange-200">
        <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-6 text-center">
          Candidate Rankings
        </h2>

        {/* Rankings Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse border border-orange-300">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-3 px-2 sm:px-4 text-left">Rank</th>
                <th className="py-3 px-2 sm:px-4 text-left cursor-pointer" onClick={() => handleSort('name')}>
                  Student Name {sortConfig.key === 'name' ? (sortConfig.ascending ? '↑' : '↓') : ''}
                </th>
                <th className="py-3 px-2 sm:px-4 text-left cursor-pointer" onClick={() => handleSort('leetcode')}>
                  LeetCode {sortConfig.key === 'leetcode' ? (sortConfig.ascending ? '↑' : '↓') : ''}
                </th>
                <th className="py-3 px-2 sm:px-4 text-left cursor-pointer" onClick={() => handleSort('github')}>
                  GitHub {sortConfig.key === 'github' ? (sortConfig.ascending ? '↑' : '↓') : ''}
                </th>
                <th className="py-3 px-2 sm:px-4 text-left cursor-pointer" onClick={() => handleSort('linkedin')}>
                  LinkedIn {sortConfig.key === 'linkedin' ? (sortConfig.ascending ? '↑' : '↓') : ''}
                </th>
                <th className="py-3 px-2 sm:px-4 text-left cursor-pointer" onClick={() => handleSort('total')}>
                  Total Score {sortConfig.key === 'total' ? (sortConfig.ascending ? '↑' : '↓') : ''}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {rankedData.map((student, index) => (
                <tr key={index} className="border-b border-orange-300">
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-semibold">{student.rank}</td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">{student.name}</td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">{student.leetcode}</td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">{student.github}</td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">{student.linkedin}</td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-semibold">{calculateTotalScore(student)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
