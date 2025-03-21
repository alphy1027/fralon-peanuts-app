import Button from "@/components/UI-primitives/Button"
import Input from "@/components/UI-primitives/Input"

const Home = () => {
    return (
        <section className="flex flex-col gap-4 items-center">
            <h1 className="text-blue-600">Welcome to Fralon Peanuts App.</h1>
            <Button variant="secondary" size="md" >Medium</Button>
            <Button variant="outline" size="sm" >Small Us</Button>
            <Button variant="primary" size="md" >Medium us</Button>
            <Button variant="outline" size="sm" >small</Button>
            <Button variant="secondary-outline" size="lg" >Large</Button>
            <Button variant="transparent" size="md" >Large</Button>
            <br />
            <br />
            <Input />
            <Input variant='secondary' />
            <Input variant='primary' />
        </section>
    )
}

export default Home
