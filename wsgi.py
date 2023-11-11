import os
import sys

try:
    sys.path.remove('/usr/lib/python3/dist-packages')
except:
    pass

sys.path.append('#')
sys.path.append('#')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'talentspot.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
