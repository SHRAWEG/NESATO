import React from 'react'
import useSWR from 'swr';
import Profile from './elements/Profile';
import Team from './elements/Team';


function Homepage(props) {

    const [isLoading, setIsLoading] = useState();
    const router = useRouter();

    useEffect(() => {
        getSession().then((session) =>{
            if(!session) {
                router.replace("/");
            }
            else {
                setIsLoading(false);
            }
        });
    },[router]);

    if (isLoading) return <p> loading... </p>;
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data} = useSWR('/api/userprofile/getuserdata', fetcher)

    if(data) {
        return (
            <>
                <>
                    <div className="flex-col fixed w-2/12">
                        <Profile user={data} />
    
                        <Team />
                    </div>
                </>    
            </>
        )
    }

    else {
        return null
    }
    
}

export default Homepage
