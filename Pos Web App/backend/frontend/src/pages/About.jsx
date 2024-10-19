
const About = () => {
    return (
        <div className="about-container px-4 py-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">About Our POS System</h1>
            
            <div className="about-content max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is this POS System?</h2>
                <p className="mb-4 text-gray-700">
                    Our Point of Sale (POS) System is designed to streamline sales processes, manage inventory, and enhance customer interactions. It is suitable for businesses of all sizes, from small retailers to larger enterprises.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>Track sales in real-time</li>
                    <li>Manage inventory efficiently</li>
                    <li>Generate insightful reports</li>
                    <li>Quick customer management</li>
                    <li>Intuitive user interface</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h2>
                <p className="mb-4 text-gray-700">
                    We prioritize user experience and aim to provide a reliable and efficient solution for your business needs. Our system is designed with modern technologies, ensuring performance and scalability.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                
                <h2>Phone Number</h2>   <p><a href="tel:+0757076318">0757076318</a></p>
                <p className="mb-4 text-gray-700">
                    For any inquiries or support, please reach out to our team at <a href="mailto:support@example.com" className="text-blue-600 underline">akioko153@gmail.com</a>.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Acknowledgements</h2>
                <p className="mb-4 text-gray-700">
                Acknowledgements
                 I would like to express my heartfelt gratitude to my teacher, Mr. Amos Ngisa, for his unwavering guidance and support throughout this project. His insights and encouragement were invaluable in shaping this application.

                Special thanks to Zindua School for providing an excellent learning environment and resources that made this journey possible.

                Lastly, I would like to acknowledge my own efforts as a student,  for the dedication and hard work that contributed to the successful completion of this project.
                </p>
            </div>
        </div>
    );
};

export default About;
