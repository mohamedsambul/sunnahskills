import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const Schedule = () => {
  const boysSchedule = [
    { day: "Monday", time: "4:00 PM", program: "BJJ Fundamentals", ages: "6-10" },
    { day: "Monday", time: "5:15 PM", program: "BJJ Advanced", ages: "11-17" },
    { day: "Wednesday", time: "4:00 PM", program: "BJJ Fundamentals", ages: "6-10" },
    { day: "Wednesday", time: "5:15 PM", program: "BJJ Advanced", ages: "11-17" },
    { day: "Saturday", time: "9:00 AM", program: "Outdoor Workshop", ages: "8-16" },
    { day: "Saturday", time: "11:00 AM", program: "Archery (Seasonal)", ages: "10-17" },
  ];

  const girlsSchedule = [
    { day: "Tuesday", time: "4:00 PM", program: "BJJ Fundamentals", ages: "6-10" },
    { day: "Tuesday", time: "5:15 PM", program: "BJJ Advanced", ages: "11-17" },
    { day: "Thursday", time: "4:00 PM", program: "BJJ Fundamentals", ages: "6-10" },
    { day: "Thursday", time: "5:15 PM", program: "BJJ Advanced", ages: "11-17" },
    { day: "Sunday", time: "9:00 AM", program: "Outdoor Workshop", ages: "8-16" },
    { day: "Sunday", time: "11:00 AM", program: "Archery (Seasonal)", ages: "10-17" },
  ];

  const mixedPrograms = [
    { day: "Friday", time: "6:00 PM", program: "Bullyproofing Workshop", ages: "8-14", frequency: "Monthly" },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-800 mb-4">
            Weekly Schedule
          </h1>
          <p className="text-xl text-gray-600">
            All classes are held at our outdoor training facility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Boys' Schedule */}
          <Card className="shadow-lg">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-center text-2xl font-poppins">
                Boys' Classes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-accent">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Day
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Program
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Ages
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {boysSchedule.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.day}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.program}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.ages}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Girls' Schedule */}
          <Card className="shadow-lg">
            <CardHeader className="bg-earthGreen text-white">
              <CardTitle className="text-center text-2xl font-poppins">
                Girls' Classes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-accent">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Day
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Program
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Ages
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {girlsSchedule.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.day}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.program}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {item.ages}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mixed Programs */}
        <Card className="mt-8 shadow-lg">
          <CardHeader className="bg-secondary text-white">
            <CardTitle className="text-center text-2xl font-poppins">
              Mixed Programs (Boys & Girls)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Day
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Ages
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Frequency
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mixedPrograms.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.day}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.program}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.ages}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.frequency}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-gray-600 text-lg">
            <AlertCircle className="text-primary mr-2" size={20} />
            Classes may be adjusted based on weather conditions. Indoor alternatives available.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
