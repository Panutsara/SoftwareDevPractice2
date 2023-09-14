import LocationDateReserve from "@/components/LocationDateReserve";
export default function Booking() {
    return (
        <main className="w-[100%] flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Booking</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Vaccine Booking Date and Location</div>
                <LocationDateReserve/>
            </div>
            
        </main>
    );
}