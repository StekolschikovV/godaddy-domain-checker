import './App.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import cn from "classnames";
import {IStore} from "./store";
import {addDomain, clear, EStatus} from "./store/actions/cheker";

function App() {

    const dispatch = useDispatch()

    const checkerState = useSelector((state: IStore) => state.checker)
    const [domainsInput, setDomainsInput] = useState("")

    const addHandler = () => {
        domainsInput
            .split(/(\s)/)
            .map(e => e.replace(",", ""))
            .filter(e => e.trim())
            .map(e => dispatch(addDomain(e)))
    }

    const clearHandler = () => {
        setDomainsInput("")
        dispatch(clear())
    }

    return (
        <div className="container mx-auto m-8 px-2">
            <p className="text-5xl mb-16 mt-16">Godaddy domain checker</p>
            <div className={"mb-10"}>
                <label htmlFor="sites"
                       className="block mb-2 text-sm font-medium text-gray-900">Sites:</label>
                <textarea
                    value={domainsInput}
                    onChange={e => setDomainsInput(e.target.value)}
                    id="sites"
                    rows={20}
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={"example.com, ..."}/>
            </div>
            <div className={"mb-10 flex gap-3 justify-end"}>
                <button
                    onClick={addHandler}
                    className={cn('bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded', {
                        "cursor-not-allowed opacity-50": checkerState.status === EStatus.CHECKING
                    })}>
                    Check
                </button>
                <button
                    onClick={clearHandler}
                    className={cn('bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded')}>
                    Clear
                </button>
            </div>
            {checkerState.domains.length > 0 &&
                <div className={"min-w-full"}>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900">Results:</label>
                    <table
                        id={"results"}
                        className="rounded-lg text-left border border-separate border-tools-table-outline  border-1 w-full pb-5">
                        <thead>
                        <tr>
                            <th className="p-5">Domain</th>
                            <th className=" pl-5 w-[150px]">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {checkerState.domains.map((d, k) => {
                            return <tr key={k}>
                                <td className="pl-5">{d.domainName}</td>
                                <td className="pl-5">
                                    {d.status === null &&
                                        <svg aria-hidden="true"
                                             className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"/>
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"/>
                                        </svg>
                                    }
                                    {d.status === true && "available"}
                                    {d.status === false && "not available"}
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default App
