$ORIGIN .
$TTL 604800	; 1 week
cotillas.es		IN SOA	ns1.cotillas.es. root.cotillas.es. (
				350        ; serial
				28800      ; refresh (8 hours)
				3600       ; retry (1 hour)
				604800     ; expire (1 week)
				38400      ; minimum (10 hours 40 minutes)
				)
			NS	ns1.cotillas.es.
$ORIGIN cotillas.es.
$TTL 300	; 5 minutes
comercial02		A	210.34.2.141
			TXT	"312dd2cf14ae9cc208504eb439f8bb1679"
DESKTOP-2311FUD		A	210.34.2.137
			TXT	"314fb751545589cd1e94b26441ba8db0af"
$TTL 604800	; 1 week
ns1			A	210.34.2.254
ns2			A	210.34.3.254
