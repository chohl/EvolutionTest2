     var tblCols = 10;
     var tblRows = 10;
     var tblBorder = 10;
     var tblSpacing = 10;
     var currRowCount = 0;
     var d = document;
     var hasHeader;
     var hasBground;
     var currSeconds;
     var currDate = new Date();
     
     switch(currDate.getSeconds() % 3) {
        case 0:
            hasHeader = true;
            hasBground = false;
            break;
        case 1:
            hasHeader = false;
            hasBground = false;
            break;
        case 2:
            hasHeader = true;
            hasBground = true;
            break;
     }
     
     tblRows = currDate.getDate();
     tblCols = currDate.getSeconds();
     currSeconds = currDate.getSeconds();
     
     d.write("<table border='" + tblBorder + "'cellspacing='" + tblSpacing + "'\>");
    
     Mainloop:
     while (true) {
        d.write("<tr>");
        if (currRowCount == 0 && hasHeader) {
          for (var tc = 0; tc < tblCols; tc++) {
            d.write("<th bgcolor='");
            if (hasBground) {
                d.write("yellow");
            }
            d.write("'>Col " + (tc + 1) + "</th>");
          }
          hasHeader = false;
          continue Mainloop;
        } else
        {
           for (var tc = 0; tc < tblCols; tc++) {
            d.write("<td align = 'center'>");
            d.write("Seconds:<br/><b>" + currSeconds + "</b>'");
            d.write("</td>");
         }
        }
        d.write("</tr>");
        if (currRowCount === tblRows) {
            break Mainloop;
        
        }
     
        currRowCount++;
     }
     d.write("</table>");
     d.close();
     
     
     
     
     