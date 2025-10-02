import { CreditCard, Home, Plane, Smartphone, Tv } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <ServiceCard Icon={Smartphone} title="Mobile Recharge" />
          <ServiceCard Icon={Tv} title="DTH Recharge" />
          <ServiceCard Icon={CreditCard} title="BBPS Bill Payments" />
          <ServiceCard Icon={Plane} title="Travel Booking" />
          <ServiceCard Icon={Home} title="City Service Provider" />
        </div>
      </div>
    </section>
  );
}
