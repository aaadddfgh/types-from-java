Class = ( _ Annotation _ )* 
		_ PubOrPri _ "class" _ name:s _ 
        "{" 
        data: (InClass)* 
        "}"  
        { 
        	return {"name":name,"data":data.filter(element => element !== null), }; 
        }

InClass = OneData 
		/ function _ {return null }

PubOrPri =  "public"{} / 
			"private"{} / 
            ""{}

OneData = ann:( _ Annotation _ )* _
		data:Data 
        _{return data;}

Data = PubOrPri _ type: s _ name:s _ ";" _
		{return {"type":type,"name":name } }

Annotation = "@" s "(" [^)]* ")" {}/"@" s {}

s= [_$a-zA-Z] [_$a-zA-Z0-9]* { return text(); }

function = content word  {}

word = "{}" {} 
		/ "{" word+ "}" {}
		/ content {} 

content = [^{}]+ {}

_ "whitespace"
  = [ \t\n\r]* {}