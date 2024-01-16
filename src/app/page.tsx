import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'

export default function Home() {
  return (
    <main className='flex items-center justify-center bg-light-gray w-screen h-screen'>
      <Card className='flex text-center flex-col bg-white justify-center p-0 w-96 max-[412px]:w-[90%] h-auto rounded-xl shadow-[15px_15px_20px_-15px_rgba(0,0,0,0.2)]'>
          <CardHeader className='p-4'>  
              <img src='image-qr-code.png' alt='qr-code-image' className='w-full h-full rounded-xl' />
          </CardHeader>
        <CardContent className='mt-2 px-[2.5rem]'>
            <CardTitle className='font-weight-[700] text-[1.7rem] text-dark-blue'>Improve your front-end skills by building projects</CardTitle>
        </CardContent>
        <CardFooter className='px-[2.6rem]'>
            <CardDescription className='font-weight-[400] text-lg text-grayish-blue '>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</CardDescription>
        </CardFooter>
      </Card>
    </main>
  )
}
