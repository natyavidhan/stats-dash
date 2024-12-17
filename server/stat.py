from flask import Flask, render_template, jsonify
import os, sys, platform, psutil, socket, time
from datetime import datetime

app = Flask(__name__)


MACHINE = platform.machine()
SYSTEM = platform.system()

def get_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "N/A"

def convert_ms_to_string(ms):
    seconds, ms = divmod(ms, 1000)
    minutes, seconds = divmod(seconds, 60)
    hours, minutes = divmod(minutes, 60)
    days, hours = divmod(hours, 24)
    ret = ""
    if days:
        ret += f"{days}d "
    if hours:
        ret += f"{hours}h "
    if minutes:
        ret += f"{minutes}m "
    if seconds:
        ret += f"{seconds}s "
    return ret

@app.route('/meta')
def index():
    data = {
        "machine": MACHINE,
        "system": SYSTEM
    }
    return jsonify(data)

@app.route('/data')
def data():
    cpu_usage = psutil.cpu_percent(interval=1, percpu=True)
    vmem = psutil.virtual_memory()
    smem = psutil.swap_memory()
    disk_usage = psutil.disk_usage('/')
    disk_io = psutil.disk_io_counters()
    net_io = psutil.net_io_counters()
    ip = get_ip()
    temp = psutil.sensors_temperatures()
    fan_speed = psutil.sensors_fans()
    boot_time = time.time() - psutil.boot_time()

    data = {
        "cpu_usage": cpu_usage,
        "vmem": [vmem.total, vmem.used, vmem.free, vmem.percent],
        "smem": [smem.total, smem.used, smem.free, smem.percent],
        "disk_usage": [disk_usage.total, disk_usage.used, disk_usage.free, disk_usage.percent],
        "disk_io": [disk_io.read_bytes, disk_io.write_bytes],
        "net_io": [net_io.bytes_sent, net_io.bytes_recv],
        "ip": ip,
        "temp": [
            {
                "cpu": [temp['atk0110'][0].current, temp['atk0110'][0].high, temp['atk0110'][0].critical],
                "mobo": [temp['atk0110'][1].current, temp['atk0110'][1].high, temp['atk0110'][1].critical]
            },
            [
                [temp['coretemp'][0].current, temp['coretemp'][0].high, temp['coretemp'][0].critical],
                [temp['coretemp'][1].current, temp['coretemp'][1].high, temp['coretemp'][1].critical],
                [temp['coretemp'][2].current, temp['coretemp'][2].high, temp['coretemp'][2].critical],
                [temp['coretemp'][3].current, temp['coretemp'][3].high, temp['coretemp'][3].critical]
            ]
        ],
        "fan_speed": {
            i.label: i.current for i in fan_speed['atk0110']
        },
        "boot_time": convert_ms_to_string(boot_time),
        "now": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)