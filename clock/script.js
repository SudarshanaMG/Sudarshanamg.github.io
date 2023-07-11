let hr = document.getElementById('hr');
        let min = document.getElementById('min');
        let sec = document.getElementById('sec');
        
        function dis(){
            let date = new Date();
        
            let hh = date.getHours();
            let mm = date.getMinutes();
            let ss = date.getSeconds();
        
            let hro = 30*hh + mm/2;
            let mro = 6*mm;
            let sro = 6*ss;
        
            hr.style.transform = `rotate(${hro}deg)`;
            
            min.style.transform = `rotate(${mro}deg)`;
            
            sec.style.transform = `rotate(${sro}deg)`;
        }
        
        setInterval(dis,1000);