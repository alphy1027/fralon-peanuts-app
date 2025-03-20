import Button from "@/components/UI-primitives/Button"
import Input from "@/components/UI-primitives/Input"

const Home = () => {
    return (
        <section className="">
            <h1 className="text-blue-600">Welcome to Fralon Peanuts App.</h1>
            <Button variant="secondary" size="md" >Shop Now</Button>
            <Button variant="outline" size="sm" >Contact Us</Button>
            <Button variant="primary" size="md" >About us</Button>
            <Button variant="outline" size="sm" >Login</Button>
            <br />
            <br />
            <Input />
            <Input variant='secondary' />
            <Input variant='primary' />
        </section>
    )
}

export default Home