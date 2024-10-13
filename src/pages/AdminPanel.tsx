import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Users, Briefcase, Building } from 'lucide-react';

const adminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type AdminFormData = z.infer<typeof adminSchema>;

const AdminPanel: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AdminFormData>({
    resolver: zodResolver(adminSchema),
  });

  const onSubmit = (data: AdminFormData) => {
    console.log(data);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Admin Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="w-full px-3 py-2 border rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input
                type="password"
                id="password"
                {...register('password')}
                className="w-full px-3 py-2 border rounded-md"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users size={24} className="mr-2 text-blue-600" />
            <h2 className="text-xl font-semibold">Total Students</h2>
          </div>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Building size={24} className="mr-2 text-green-600" />
            <h2 className="text-xl font-semibold">Registered Companies</h2>
          </div>
          <p className="text-3xl font-bold">87</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Briefcase size={24} className="mr-2 text-purple-600" />
            <h2 className="text-xl font-semibold">Active Internships</h2>
          </div>
          <p className="text-3xl font-bold">156</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Student Registrations</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Department</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">John Doe</td>
                <td className="py-2">john.doe@fcrit.ac.in</td>
                <td className="py-2">Computer Engineering</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Jane Smith</td>
                <td className="py-2">jane.smith@fcrit.ac.in</td>
                <td className="py-2">Information Technology</td>
              </tr>
              <tr>
                <td className="py-2">Mike Johnson</td>
                <td className="py-2">mike.johnson@fcrit.ac.in</td>
                <td className="py-2">Mechanical Engineering</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Company Registrations</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Company Name</th>
                <th className="text-left py-2">Industry</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">TechCorp Inc.</td>
                <td className="py-2">Information Technology</td>
                <td className="py-2"><span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-sm">Approved</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-2">InnovateX</td>
                <td className="py-2">Software Development</td>
                <td className="py-2"><span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-sm">Pending</span></td>
              </tr>
              <tr>
                <td className="py-2">Global Solutions Ltd.</td>
                <td className="py-2">Consulting</td>
                <td className="py-2"><span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-sm">Approved</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Admin Actions</h2>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Manage Users
          </button>
          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
            Approve Companies
          </button>
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
            Review Internships
          </button>
          <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300">
            Generate Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;