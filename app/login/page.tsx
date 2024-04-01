import LoginForm from "./login-form"

export default function LoginPage(){
    return (
        <main className="h-screen">
            <div className="h-screen flex flex-col justify-center items-center pb-10">
                <h2 className="font-bold mb-10 text-2xl">Fill your credentials in</h2>
                <LoginForm />
            </div>
        </main>
    )
}
