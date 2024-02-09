import '../../index.css';

export default function AccountContent() {
    return (
        <div className="flex items-center flex-col">
            <div className="m-20 flex justify-center align-middle bg-red-700">
                <span className="text-main-black text-4xl font-bold">АККАУНТ</span>  
            </div>
            <div className="bg-blue-500 w-full flex">
                <div className="bg-yellow-300 absolute right-1/2 -translate-x-72">
                    <p className="text-main-black font-medium">Личные Данные</p>
                    <p className="text-main-black font-medium">Заказы</p>
                    <p className="text-main-black font-medium">Выйти</p>
                </div>

                <div className="bg-purple-400 m-auto">
                    <p className="text-main-black">Личные Данные</p>
                    <p className="text-main-black">Заказы</p>
                    <p className="text-main-black">Выйти</p>
                </div>
            </div>
        </div>
    );
}