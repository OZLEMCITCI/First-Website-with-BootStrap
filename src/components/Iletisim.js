import React,{useState} from 'react';
import "./Iletisim.css"

const Iletisim = () => {

    const [form, setform] = useState({ad: "",soyad:"",mesaj:""})
    
    const { ad, soyad, mesaj } = form;
    
    const change = function (event) {
        const { name,value } = event.target;
        setform(() => {
            return {
                ...form,
                [name]:value,
            }
        });
        
    }





    return (
        <div className="alan">
            
            {ad&& (<h1 className="mb-">Merhaba {ad} {soyad }</h1>)}
            
            <form>
                <div className="contanier">
                    <div className="contanier">
                        <div className="col d-flex justify-content-end"><label>Adi:</label></div>


                        <div className="col d-flex justify-content-start">
                            <input placeholder="ADINIZ" type="text" name="ad" required=""  value={ad} onChange={change}></input>
                        </div>
                        


                    <div className="col d-flex justify-content-end"><label>Soyadi:</label></div>
                    <div className="col d-flex justify-content-start"><input type="text" name="soyad" value={soyad} onChange={change}></input></div>
                    <div className="col d-flex justify-content-end"><label>Cinsiyet:</label></div>
                    <div className="col  justify-content-start ">
                        <span className="" ><label>Bayan</label><input type="radio"></input></span>
                        <span className="" ><label>Bay:</label><input type="radio"></input></span>
                        
                    </div>
                    <div className="col d-flex justify-content-end"><label>Ilce:</label></div>
                    <div className="col d-flex justify-content-start"><select className="input"><option>Adana</option></select></div>
                    <div className="col d-flex justify-content-end"><label>E-posta:</label></div>
                    <div className="col d-flex justify-content-start"><input type="eposta"></input></div>
                    <div className="col d-flex justify-content-end"><label>Kisisel Site:</label></div>
                    <div className="col d-flex justify-content-start"><input type="url"></input></div>
                    <div className="col d-flex justify-content-end"><label>Telefon:</label></div>
                    <div className="col d-flex justify-content-start"><input type="tel"></input></div>
                    </div>

                    <div className="contanier">
                        <div className="col d-flex justify-content-end"><label>Hobiler:</label></div>
                        
                        
                        <div className=" p-3 ">
                            <div className=""><label className=" lable px-3" >Fotbol</label><input className="" type="checkbox" /></div>
                            <div><label className=" lable px-2 " >Basketbol</label><input className="" type="checkbox" /></div>
                            <div><label className="lable px-2 " >Voleybol</label><input className="" type="checkbox" /></div>
                            
                            
                        </div>
                           
                    <div className="col d-flex justify-content-end"><label>Profil Fotografi:</label></div>
                    <div className="col d-flex justify-content-start"><input type="url"></input></div>
                    <div className="col d-flex justify-content-end"><label>Dogum tarihi</label></div>
                    <div className="col d-flex justify-content-start"><input type="date"></input></div>
                    
                    <div className="col d-flex justify-content-end"><label>Adress:</label></div>
                        <div className="col d-flex justify-content-start"><textarea name="mesaj" value={mesaj} onChange={change} className="input" rows="3"></textarea></div>
                        <div></div>
                    <div className="col d-flex justify-content-start "><input className="hello" type="submit" value="KAYDET"></input></div>
                   

                    </div>
                    

                </div>
          </form>  
        </div>
    )
}

export default Iletisim

